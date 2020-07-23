import * as vscode from "vscode";

export const provider = vscode.languages.registerCompletionItemProvider(
    ["javascript"],
    {
        provideCompletionItems: (
            document: vscode.TextDocument,
            position: vscode.Position
        ) => {
            // Not triggered inside comments
            console.log("!!!", document.getText(), "!!!");

            //...
            const completions: vscode.CompletionItem[] = [];

            const line = document.lineAt(position).text;
            if (/^([ ]*)\*([ ]*)/.test(line)) {
                console.log("시작!", line, "!끝!!");
                const getCompletion = new vscode.CompletionItem("get: ");
                getCompletion.insertText = new vscode.SnippetString("get: ");
                getCompletion.documentation = new vscode.MarkdownString(
                    "get method"
                );
                completions.push(getCompletion);

                const postCompletion = new vscode.CompletionItem("post: ");
                postCompletion.insertText = new vscode.SnippetString("post: ");
                postCompletion.documentation = new vscode.MarkdownString(
                    "post method"
                );
                completions.push(postCompletion);

                const putCompletion = new vscode.CompletionItem("put: ");
                putCompletion.insertText = new vscode.SnippetString("put: ");
                putCompletion.documentation = new vscode.MarkdownString(
                    "put method"
                );
                completions.push(putCompletion);

                const deleteCompletion = new vscode.CompletionItem("delete: ");
                deleteCompletion.insertText = new vscode.SnippetString(
                    "delete: "
                );
                deleteCompletion.documentation = new vscode.MarkdownString(
                    "delete method"
                );
                completions.push(deleteCompletion);

                const tagsCompletion = new vscode.CompletionItem(
                    "tags: [tagname]"
                );
                tagsCompletion.insertText = new vscode.SnippetString(
                    "tags: [tagname]"
                );
                tagsCompletion.documentation = new vscode.MarkdownString(
                    "tags"
                );
                completions.push(tagsCompletion);

                const summaryCompletion = new vscode.CompletionItem(
                    `summary: "설명입니다"`
                );
                summaryCompletion.insertText = new vscode.SnippetString(
                    `summary: "설명입니다"`
                );
                summaryCompletion.documentation = new vscode.MarkdownString(
                    `summary: "설명입니다"`
                );
                completions.push(summaryCompletion);

                const consumesCompletion = new vscode.CompletionItem(
                    "consumes: [application/json]"
                );
                consumesCompletion.insertText = new vscode.SnippetString(
                    "consumes: [application/json]"
                );
                consumesCompletion.documentation = new vscode.MarkdownString(
                    "consumes: [application/json]"
                );
                completions.push(consumesCompletion);

                const producesCompletion = new vscode.CompletionItem(
                    "produces: [application/json]"
                );
                producesCompletion.insertText = new vscode.SnippetString(
                    "produces: [application/json]"
                );
                producesCompletion.documentation = new vscode.MarkdownString(
                    "produces: [application/json]"
                );
                completions.push(producesCompletion);

                const parametersCompletion = new vscode.CompletionItem(
                    "parameters: "
                );
                parametersCompletion.insertText = new vscode.SnippetString(
                    `parameters: `
                );
                parametersCompletion.documentation = new vscode.MarkdownString(
                    "parameters"
                );
                completions.push(parametersCompletion);

                const nameCompletion = new vscode.CompletionItem(
                    "name: blabla"
                );
                nameCompletion.insertText = new vscode.SnippetString(
                    `name: blabla`
                );
                nameCompletion.documentation = new vscode.MarkdownString(
                    "parameter name"
                );
                completions.push(nameCompletion);

                const descriptionCompletion = new vscode.CompletionItem(
                    `description: "설명입니다."`
                );
                descriptionCompletion.insertText = new vscode.SnippetString(
                    `description: "설명입니다."`
                );
                descriptionCompletion.documentation = new vscode.MarkdownString(
                    "description"
                );
                completions.push(descriptionCompletion);

                const inHeaderCompletion = new vscode.CompletionItem(
                    "in: header"
                );
                inHeaderCompletion.insertText = new vscode.SnippetString(
                    "in: header"
                );
                inHeaderCompletion.documentation = new vscode.MarkdownString(
                    "HTTP headers parameter"
                );
                completions.push(inHeaderCompletion);

                const inBodyCompletion = new vscode.CompletionItem("in: body");
                inBodyCompletion.insertText = new vscode.SnippetString(
                    "in: body"
                );
                inBodyCompletion.documentation = new vscode.MarkdownString(
                    "HTTP body parameter"
                );
                completions.push(inBodyCompletion);

                const inQueryCompletion = new vscode.CompletionItem(
                    "in: query"
                );
                inQueryCompletion.insertText = new vscode.SnippetString(
                    "in: query"
                );
                inQueryCompletion.documentation = new vscode.MarkdownString(
                    "HTTP URL query parameter"
                );
                completions.push(inQueryCompletion);

                const inPathCompletion = new vscode.CompletionItem("in: path");
                inPathCompletion.insertText = new vscode.SnippetString(
                    "in: path"
                );
                inPathCompletion.documentation = new vscode.MarkdownString(
                    "HTTP URL path parameter"
                );
                completions.push(inPathCompletion);

                const requiredCompletion = new vscode.CompletionItem(
                    "required: true"
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

                const exampleCompletion = new vscode.CompletionItem(
                    "example: foo"
                );
                exampleCompletion.insertText = new vscode.SnippetString(
                    `example: foo`
                );
                exampleCompletion.documentation = new vscode.MarkdownString(
                    `example: foo`
                );
                completions.push(exampleCompletion);

                const responsesCompletion = new vscode.CompletionItem(
                    "responses: "
                );
                responsesCompletion.insertText = new vscode.SnippetString(
                    `responses: `
                );
                responsesCompletion.documentation = new vscode.MarkdownString(
                    `responses: `
                );
                completions.push(responsesCompletion);

                const schemaCompletion = new vscode.CompletionItem("schema: ");
                schemaCompletion.insertText = new vscode.SnippetString(
                    `schema: `
                );
                schemaCompletion.documentation = new vscode.MarkdownString(
                    `schema: `
                );
                completions.push(schemaCompletion);

                const propertiesCompletion = new vscode.CompletionItem(
                    "properties: "
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
    },
    ""
    //""
);
