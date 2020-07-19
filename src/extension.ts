import * as vscode from "vscode";

import * as basic_provider from "./provider/basic_provider";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand(
        "swagger-jsdoc.helloWorld",
        () => {
            // The code you place here will be executed every time your command is executed

            // Display a message box to the user
            vscode.window.showInformationMessage("trigger swagger-jsdoc");
        }
    );

    context.subscriptions.push(disposable);
    context.subscriptions.push(basic_provider.provider);
}

// this method is called when your extension is deactivated
export function deactivate() {}
