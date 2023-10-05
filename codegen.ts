import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.CMS_URL}/graphql`,
  documents: 'graphql/**/*.graphql',
  generates: {
    'graphql/generated/codegen.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ]
    }
  }
};

export default config;
