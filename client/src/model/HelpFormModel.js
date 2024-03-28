// HelpFormModel.js
import { addHelp, selectAll } from "../api/boardService";
export async function submitHelpForm(formData) {
  try {
    const result = await addHelp(formData);
    console.log("Success:", result);
    // 성공 처리 로직
  } catch (error) {
    console.error("Error:", error);
    // 실패 처리 로직
  }
}
