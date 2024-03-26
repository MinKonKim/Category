// HelpFormModel.js
import { addHelp } from "../api/boardService";

export const submitHelpForm = (formData) => {
  try {
    const result = addHelp(formData);
    console.log("Success:", result);
    // 성공 처리 로직
  } catch (error) {
    console.error("Error:", error);
    // 실패 처리 로직
  }
};
