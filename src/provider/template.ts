import { networkInterfaces } from "os";

export function getTemplate(method = "method") {
    let parameterType = "path | query | body | header";

    switch (method) {
        case "get":
        case "delete":
            parameterType = "query";
            break;
        case "post":
        case "put":
            parameterType = "body";
            break;
    }

    const docTemplate = `/**
 * @swagger
 * "/url":
 *   ${method}:
 *     tags: [tagname]
 *     summary:
 *       "설명입니다."
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         require: true
 *         type: string
 *         example: "1mckewkjldqwlkex24539rij309cmf489cmt4cm"
 *       - in: ${parameterType}
 *         name: "param_name"
 *         required: true
 *         type: string
 *         description: "매개변수"
 *         example: "foo"
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

    return docTemplate;
}
