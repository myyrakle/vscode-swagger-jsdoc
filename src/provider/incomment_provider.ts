import * as vscode from "vscode";

import * as template from "./template";

export const provider = vscode.languages.registerCompletionItemProvider(
    "javascript",
    {
        provideCompletionItems: (
            document: vscode.TextDocument,
            position: vscode.Position
        ) => {
            const completions: vscode.CompletionItem[] = [];

            const line = document.lineAt(position).text;
            if (/^([ ]*)\*([ ]*)/.test(line)) {
                const tagsCompletion = new vscode.CompletionItem("tags");
                tagsCompletion.insertText = new vscode.SnippetString(
                    "tags: [tagname]"
                );
                tagsCompletion.documentation = new vscode.MarkdownString(
                    "tags: [tagname]"
                );
                completions.push(tagsCompletion);

                const summaryCompletion = new vscode.CompletionItem("summary");
                summaryCompletion.insertText = new vscode.SnippetString(
                    `summary: "설명입니다"`
                );
                summaryCompletion.documentation = new vscode.MarkdownString(
                    `summary: "설명입니다"`
                );
                completions.push(summaryCompletion);

                const consumesCompletion = new vscode.CompletionItem(
                    "consumes"
                );
                consumesCompletion.insertText = new vscode.SnippetString(
                    "consumes: [application/json]"
                );
                consumesCompletion.documentation = new vscode.MarkdownString(
                    "consumes: [application/json]"
                );
                completions.push(consumesCompletion);

                const producesCompletion = new vscode.CompletionItem(
                    "produces"
                );
                producesCompletion.insertText = new vscode.SnippetString(
                    "produces: [application/json]"
                );
                producesCompletion.documentation = new vscode.MarkdownString(
                    "produces: [application/json]"
                );
                completions.push(producesCompletion);

                const parametersCompletion = new vscode.CompletionItem(
                    "parameters"
                );
                parametersCompletion.insertText = new vscode.SnippetString(
                    `parameters:`
                );
                parametersCompletion.documentation = new vscode.MarkdownString(
                    "parameters"
                );
                completions.push(parametersCompletion);

                const nameCompletion = new vscode.CompletionItem("name");
                nameCompletion.insertText = new vscode.SnippetString(
                    `name: blabla`
                );
                nameCompletion.documentation = new vscode.MarkdownString(
                    "parameter name"
                );
                completions.push(nameCompletion);

                const descriptionCompletion = new vscode.CompletionItem(
                    "description"
                );
                descriptionCompletion.insertText = new vscode.SnippetString(
                    `description: "설명입니다."`
                );
                descriptionCompletion.documentation = new vscode.MarkdownString(
                    "description"
                );
                completions.push(descriptionCompletion);

                const inHeaderCompletion = new vscode.CompletionItem("in");
                inHeaderCompletion.insertText = new vscode.SnippetString(
                    "in: header"
                );
                inHeaderCompletion.documentation = new vscode.MarkdownString(
                    "in: header"
                );
                completions.push(inHeaderCompletion);

                const inBodyCompletion = new vscode.CompletionItem("in");
                inBodyCompletion.insertText = new vscode.SnippetString(
                    "in: body"
                );
                inBodyCompletion.documentation = new vscode.MarkdownString(
                    "in: body"
                );
                completions.push(inBodyCompletion);

                const inQueryCompletion = new vscode.CompletionItem("in");
                inQueryCompletion.insertText = new vscode.SnippetString(
                    "in: query"
                );
                inQueryCompletion.documentation = new vscode.MarkdownString(
                    "in: query"
                );
                completions.push(inQueryCompletion);

                const inPathCompletion = new vscode.CompletionItem("in");
                inPathCompletion.insertText = new vscode.SnippetString(
                    "in: path"
                );
                inPathCompletion.documentation = new vscode.MarkdownString(
                    "in: path"
                );
                completions.push(inPathCompletion);

                const requiredCompletion = new vscode.CompletionItem(
                    "required"
                );
                requiredCompletion.insertText = new vscode.SnippetString(
                    "required: true"
                );
                requiredCompletion.documentation = new vscode.MarkdownString(
                    "required"
                );
                completions.push(requiredCompletion);

                const typeStringCompletion = new vscode.CompletionItem(
                    "type: string"
                );
                typeStringCompletion.insertText = new vscode.SnippetString(
                    "type: string"
                );
                typeStringCompletion.documentation = new vscode.MarkdownString(
                    "type: string"
                );
                completions.push(typeStringCompletion);

                const typeObjectCompletion = new vscode.CompletionItem(
                    "type: object"
                );
                typeObjectCompletion.insertText = new vscode.SnippetString(
                    "type: object"
                );
                typeObjectCompletion.documentation = new vscode.MarkdownString(
                    "type: object"
                );
                completions.push(typeObjectCompletion);

                const typeArrayCompletion = new vscode.CompletionItem(
                    "type: array"
                );
                typeArrayCompletion.insertText = new vscode.SnippetString(
                    "type: array"
                );
                typeArrayCompletion.documentation = new vscode.MarkdownString(
                    "type: array"
                );
                completions.push(typeArrayCompletion);

                const typeBooleanCompletion = new vscode.CompletionItem(
                    "type: boolean"
                );
                typeBooleanCompletion.insertText = new vscode.SnippetString(
                    "type: boolean"
                );
                typeBooleanCompletion.documentation = new vscode.MarkdownString(
                    "type: boolean"
                );
                completions.push(typeBooleanCompletion);

                const typeIntegerCompletion = new vscode.CompletionItem(
                    "type: integer"
                );
                typeIntegerCompletion.insertText = new vscode.SnippetString(
                    "type: integer"
                );
                typeIntegerCompletion.documentation = new vscode.MarkdownString(
                    "type: integer"
                );
                completions.push(typeIntegerCompletion);

                const typeNumberCompletion = new vscode.CompletionItem(
                    "type: number"
                );
                typeNumberCompletion.insertText = new vscode.SnippetString(
                    "type: number"
                );
                typeNumberCompletion.documentation = new vscode.MarkdownString(
                    "type: number"
                );
                completions.push(typeNumberCompletion);

                const exampleCompletion = new vscode.CompletionItem("example");
                exampleCompletion.insertText = new vscode.SnippetString(
                    `example: foo`
                );
                exampleCompletion.documentation = new vscode.MarkdownString(
                    `example: foo`
                );
                completions.push(exampleCompletion);

                const responsesCompletion = new vscode.CompletionItem(
                    "responses"
                );
                responsesCompletion.insertText = new vscode.SnippetString(
                    `responses: `
                );
                responsesCompletion.documentation = new vscode.MarkdownString(
                    `responses: `
                );
                completions.push(responsesCompletion);

                const schemaCompletion = new vscode.CompletionItem("schema");
                schemaCompletion.insertText = new vscode.SnippetString(
                    `schema: `
                );
                schemaCompletion.documentation = new vscode.MarkdownString(
                    `schema: `
                );
                completions.push(schemaCompletion);

                const propertiesCompletion = new vscode.CompletionItem(
                    "properties"
                );
                propertiesCompletion.insertText = new vscode.SnippetString(
                    `properties: `
                );
                propertiesCompletion.documentation = new vscode.MarkdownString(
                    `properties: `
                );
                completions.push(propertiesCompletion);
            }

            return completions;
        },
    }
    //"swag"
);
