import * as vscode from "vscode";

export const provider = vscode.languages.registerCompletionItemProvider(
    "javascript",
    {
        provideCompletionItems: (
            document: vscode.TextDocument,
            position: vscode.Position
        ) => {
            const docTemplate = `/**
* @swagger
* "/url":
*   method:
*     tags: [tagname]
*     summary:
*       "설명입니다."
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - in: body
*         name: phone
*         required: true
*         type: string
*         description: "매개변수"
*     responses:
*       200:
*         description: "성공"
*         schema:
*           type: object
*           properties:
*             success:
*               type: boolean
*               example: true
*               description: "성공 여부"
*       400:
*         description: "잘못된 매개변수"
*         schema:
*           type: object
*           properties:
*             success:
*               type: boolean
*               example: false
*               description: "성공 여부"
*       500:
*         description: "서버 오류"
*         schema:
*           type: object
*           properties:
*             success:
*               type: boolean
*               example: false
*               description: "성공 여부"
*/`;

            const basicCompletion = new vscode.CompletionItem(
                "swagger"
                //vscode.CompletionItemKind.Field
            );
            basicCompletion.insertText = new vscode.SnippetString(docTemplate);
            basicCompletion.documentation = new vscode.MarkdownString(
                "swagger 기본 골격을 생성합니다."
            );

            // const linePrefix = document
            //     .lineAt(position)
            //     .text.substr(0, position.character);
            // if (!linePrefix.endsWith("swagger")) {
            //     return undefined;
            // }

            return [
                basicCompletion,
                // new vscode.CompletionItem(
                //     "docTemplate",
                //     vscode.CompletionItemKind.Field
                // ),
            ];
        },
    }
    //"swag"
);
