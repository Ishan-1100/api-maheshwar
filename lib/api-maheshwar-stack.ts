import * as cdk from 'aws-cdk-lib';
// import * as apigateway from 'aws-cdk-lib/aws-apigatewayv2';
import * as api from 'aws-cdk-lib/aws-apigateway';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
// import * as aws from 'aws-cdk-lib/aws';

class ApiMaheshwarStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Import the existing API Gateway
    // const existingApi = apigateway..fromHttpApiAttributes(this, 'ExistingApi', {
    //   httpApiId: 'YOUR_API_ID', // Replace with your existing API ID
    // });

    // Import the existing API Gateway
    const existingApi = api.RestApi.fromRestApiAttributes(this, 'ExistingApi', {
      restApiId: 'YOUR_API_ID', // Replace with your existing API Gateway ID
      rootResourceId: 'YOUR_ROOT_RESOURCE_ID', // Replace with the root resource ID
    });
    // Create CloudWatch metric for the existing API
    const apiMetric = new cloudwatch.Metric({
      namespace: 'AWS/ApiGateway',
      metricName: 'Count',
      dimensionsMap: {
        ApiName: existingApi.restApiId,
      },
    });

    // Create an Alarm for the metric
    const alarm = new cloudwatch.Alarm(this, 'ExistingApiAlarm', {
      metric: apiMetric,
      threshold: 1, // Set your desired threshold
      evaluationPeriods: 1,
    });
  }
}




