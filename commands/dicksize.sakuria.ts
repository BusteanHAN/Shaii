import { randomDickSize } from "../logic/logic.sakuria";
import { IMessage } from "../types";

export const command = {
  name: "dicksize",
  requiresProcessing: false,
  execute: async (message: IMessage): Promise<string> => {
    if (message.mentions.members && message.mentions.members.size !== 0) {
      const dicksize = randomDickSize();
      const enemyDicksize = randomDickSize();

      return `
        8${"=".repeat(dicksize)}D ${dicksize}cm <@${message.author}>
        8${"=".repeat(enemyDicksize)}D ${enemyDicksize}cm <@${message.mentions.members.first()}>
        diff: ${Math.abs(dicksize - enemyDicksize)}cm
        winner: <@${dicksize > enemyDicksize ? message.author : message.mentions.members.first()}>
      `;
    }
 
    const dicksize = randomDickSize();
    return `8${"=".repeat(dicksize)}D ${dicksize}cm`;
  },
};
