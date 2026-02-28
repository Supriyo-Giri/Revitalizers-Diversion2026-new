import app from "./src/app.js"
import logger from "./src/utils/logger.js"
import { env } from "./src/utils/env.js"

app.listen(env.PORT,()=>{
    logger.info(`Server started on port: ${env.PORT}`);
})