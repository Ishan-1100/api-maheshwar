#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ApiMaheshwarStack } from '../lib/api-maheshwar-stack';
import { CdkStarterStack } from '../lib/apigateway';

const app = new cdk.App();

new ApiMaheshwarStack(app, 'ApiMaheshwarStack', {
 env: { account: '464618432624', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
new CdkStarterStack(app, 'api', {
  
  env: { account: '464618432624', region: 'us-east-1' },
  
});