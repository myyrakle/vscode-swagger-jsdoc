import * as vscode from "vscode";

import * as template from "./template";

export const provider = vscode.languages.registerCompletionItemProvider(
    "javascript",
    {
        provideCompletionItems: (
            document: vscode.TextDocument,
            position: vscode.Position
        ) => {
            const basicCompletion = new vscode.CompletionItem("swagger");
            basicCompletion.insertText = new vscode.SnippetString(
                template.getTemplate()
            );
            basicCompletion.documentation = new vscode.MarkdownString(
                "swagger 기본 골격을 생성합니다."
            );

            return [basicCompletion];
        },
    }
    //"swag"
);
