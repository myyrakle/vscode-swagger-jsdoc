import * as vscode from "vscode";

import * as basic_provider from "./provider/basic_provider";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    let trigger = vscode.commands.registerCommand("swagger-jsdoc", () => {
        vscode.window.showInformationMessage("trigger swagger-jsdoc");
    });

    context.subscriptions.push(trigger, basic_provider.provider);
}

// this method is called when your extension is deactivated
export function deactivate() {}
