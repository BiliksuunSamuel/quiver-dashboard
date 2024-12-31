import { colors } from "@mui/material";
import { PriorityTypes, TransactionStatus } from "../types";
import { ErrorShades, OrangeShades } from "../theme/AppColors";

export function getPriorityColor(priorityType: PriorityTypes) {
  switch (priorityType) {
    case "Urgent":
      return "#E81313";
    case "High":
      return "#FAA01D";
    case "Normal":
      return "#3080ED";
    default:
      return "#E0E0E0";
  }
}

export function getStatusColor(status: TransactionStatus) {
  switch (status) {
    case "Processing":
    case "Pending":
      return OrangeShades[500];
    case "Succcessful":
      return colors.green[600];
    case "Failed":
    case "Expired":
      return ErrorShades[500];
    default:
      return colors.grey[900];
  }
}
