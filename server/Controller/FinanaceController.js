import FinanaceModel from "../Model/FinanaceModel.js";

export const addtoPayroll = async (req, res) => {
  try {
    const { user, basicSalary, allowances, deductions, tax } = req.body;

    if (!user || !basicSalary) {
      return res.status(400).json({
        success: false,
        message: "User and basicSalary are required",
      });
    }

    const finalAllowances = allowances ?? [
      { title: "Medical Allowance", amount: 0 },
      { title: "Transport Allowance", amount: 0 },
    ];
    const finalDeductions = deductions ?? [{ title: "Late Fine", amount: 0 }];
    const finalTax = tax ?? 100;
    const totalAllowances = finalAllowances.reduce(
      (sum, a) => sum + (a.amount || 0),
      0
    );

    const totalDeductions = finalDeductions.reduce(
      (sum, d) => sum + (d.amount || 0),
      0
    );

    const totalSalary = basicSalary + totalAllowances;
    const netSalary = totalSalary - finalTax - totalDeductions;

    const userPay = await FinanaceModel.create({
      user,
      basicSalary,
      allowances: finalAllowances,
      deductions: finalDeductions,
      tax: finalTax,
      totalSalary,
      netSalary,
      status: "pending",
    });

    return res.status(201).json({
      success: true,
      message: "User added into Payroll successfully",
      data: userPay,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updatePay = async (req, res) => {
  const { id } = req.params;
  console.log("id : ", id);
  try {
    const payroll = await FinanaceModel.findById({ user: id });
    if (!payroll) return res.status(404).json({ message: "Not found" });

    Object.assign(payroll, req.body);
    const { totalSalary, netSalary } = calculatePayroll(
      payroll.basicSalary,
      payroll.allowances || [],
      payroll.deductions || [],
      payroll.tax || 0
    );

    payroll.totalSalary = totalSalary;
    payroll.netSalary = netSalary;

    await payroll.save();

    res.json({ success: true, data: payroll });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const calculatePayroll = (basic, allowances, deductions, tax) => {
  const totalAllowances = allowances.reduce((sum, a) => sum + a.amount, 0);
  const totalDeductions = deductions.reduce((sum, d) => sum + d.amount, 0);

  const totalSalary = basic + totalAllowances - totalDeductions;
  const netSalary = totalSalary - tax;

  return { totalSalary, netSalary };
};
