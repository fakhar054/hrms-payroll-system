"use client"

import { MoreVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const ActionDropdown = ({
  onApprove,
  onReject,
  onReview,
  onEdit,
  onDelete,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        {/* HR ACTIONS */}
        {onApprove && (
          <DropdownMenuItem
            onClick={onApprove}
            className="text-green-600 focus:text-green-600"
          >
            Accept
          </DropdownMenuItem>
        )}

        {onReject && (
          <DropdownMenuItem
            onClick={onReject}
            className="text-red-600 focus:text-red-600"
          >
            Reject
          </DropdownMenuItem>
        )}

        {/* EMPLOYEE ACTIONS */}
        {onEdit && (
          <DropdownMenuItem onClick={onEdit}>
            Edit
          </DropdownMenuItem>
        )}

        {onDelete && (
          <DropdownMenuItem
            onClick={onDelete}
            className="text-red-600 focus:text-red-600"
          >
            Delete
          </DropdownMenuItem>
        )}

        {(onReview || onEdit || onApprove) && <DropdownMenuSeparator />}

        {onReview && (
          <DropdownMenuItem onClick={onReview}>
            Review
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ActionDropdown
