import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader"
import { loadSchemaSync } from "@graphql-tools/load"
import { addResolversToSchema } from "@graphql-tools/schema"
import { merge } from "lodash"
import {join} from 'path'

import { MessageResolver } from "./modules/Message/resolvers"

const baseSchema = loadSchemaSync(join(__dirname, "modules/**/*.graphql"), {
    loaders: [new GraphQLFileLoader()]
})

const schema = addResolversToSchema({
    schema: baseSchema,
    resolvers: merge(MessageResolver)
})

export default schema;