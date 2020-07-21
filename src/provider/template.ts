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
 *     summary: "설명입니다."
 *     consumes: [application/json]
 *     produces: [application/json]
 *     parameters:
 *       - name: Authorization
 *         description: "인증용 토큰입니다."
 *         in: header 
 *         require: true
 *         type: string
 *         example: "1mckewkjldqwlkex24539rij309cmf489cmt4cm"
 *       - name: "param_name" 
 *         description: "매개변수"
 *         in: ${parameterType}
 *         required: true
 *         type: string 
 *         example: "foo"
 *     responses:
 *       200:
 *         description: "성공"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "성공 여부"
 *               type: boolean
 *               example: true
 *       400:
 *         description: "잘못된 매개변수"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "성공 여부"
 *               type: boolean
 *               example: false
 *       500:
 *         description: "서버 오류"
 *         schema:
 *           type: object
 *           properties:
 *             success:
 *               description: "성공 여부"
 *               type: boolean
 *               example: false
 */`;

    return docTemplate;
}
