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

            const getCompletion = new vscode.CompletionItem("swagger-get");
            getCompletion.insertText = new vscode.SnippetString(
                template.getTemplate("get")
            );
            getCompletion.documentation = new vscode.MarkdownString(
                "swagger 기본 골격을 생성합니다."
            );

            const postCompletion = new vscode.CompletionItem("swagger-post");
            postCompletion.insertText = new vscode.SnippetString(
                template.getTemplate("get")
            );
            postCompletion.documentation = new vscode.MarkdownString(
                "swagger 기본 골격을 생성합니다."
            );

            const putCompletion = new vscode.CompletionItem("swagger-put");
            putCompletion.insertText = new vscode.SnippetString(
                template.getTemplate("get")
            );
            putCompletion.documentation = new vscode.MarkdownString(
                "swagger 기본 골격을 생성합니다."
            );

            const deleteCompletion = new vscode.CompletionItem(
                "swagger-delete"
            );
            deleteCompletion.insertText = new vscode.SnippetString(
                template.getTemplate("get")
            );
            deleteCompletion.documentation = new vscode.MarkdownString(
                "swagger 기본 골격을 생성합니다."
            );

            return [
                basicCompletion,
                getCompletion,
                postCompletion,
                putCompletion,
                deleteCompletion,
            ];
        },
    }
    //"swag"
);
