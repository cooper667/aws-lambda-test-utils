'use strict';
/**
* Functions that return mock AWS event object for testing AWS Lambda functions;
*
* TODO: Add options object to each function and return appropriate event object e.g. 
*
*  {
*    awsRegion: defaults to eu-west-1
*    events: [] array of objects e.g. { type: 'INSERT', number: 2 },
*    eventSourceARN: defaults to "arn:aws:dynamodb:us-west-2:account-id:table/ExampleTableWithStream/stream/2015-06-27T00:48:05.899"
*  }
**/

module.exports = {
  createS3Event:       createS3Event,
  createDynamoDBEvent: createDynamoDBEvent,
  createSNSEvent:      createSNSEvent,
}

function createDynamoDBEvent(){
  return {
    "Records": [
      {
        "eventID": "1",
        "eventVersion": "1.0",
        "dynamodb": {
          "Keys": {
            "Id": {
              "N": "101"
            }
          },
          "NewImage": {
            "Message": {
              "S": "New item!"
            },
            "Id": {
              "N": "101"
            }
          },
          "StreamViewType": "NEW_AND_OLD_IMAGES",
          "SequenceNumber": "111",
          "SizeBytes": 26
        },
        "awsRegion": "us-west-2",
        "eventName": "INSERT",
        "eventSourceARN": "arn:aws:dynamodb:us-west-2:account-id:table/ExampleTableWithStream/stream/2015-06-27T00:48:05.899",
        "eventSource": "aws:dynamodb"
      },
    ]
  }
}

function createSNSEvent () {
  return  {
    "Records": [
      {
        "EventVersion": "1.0",
        "EventSubscriptionArn": "arn:aws:sns:EXAMPLE",
        "EventSource": "aws:sns",
        "Sns": {
          "SignatureVersion": "1",
          "Timestamp": "1970-01-01T00:00:00.000Z",
          "Signature": "EXAMPLE",
          "SigningCertUrl": "EXAMPLE",
          "MessageId": "95df01b4-ee98-5cb9-9903-4c221d41eb5e",
          "Message": "Hello from SNS!",
          "MessageAttributes": {
            "Test": {
              "Type": "String",
              "Value": "TestString"
            },
            "TestBinary": {
              "Type": "Binary",
              "Value": "TestBinary"
            }
          },
          "Type": "Notification",
          "UnsubscribeUrl": "EXAMPLE",
          "TopicArn": "arn:aws:sns:EXAMPLE",
          "Subject": "TestInvoke"
        }
      }
    ]
  }
}

function createS3Event() {
  return {
    "Records": [
      {
        "eventVersion": "2.0",
        "eventTime": "1970-01-01T00:00:00.000Z",
        "requestParameters": {
          "sourceIPAddress": "127.0.0.1"
        },
        "s3": {
          "configurationId": "testConfigRule",
          "object": {
            "eTag": "0123456789abcdef0123456789abcdef",
            "sequencer": "0A1B2C3D4E5F678901",
            "key": "HappyFace.jpg",
            "size": 1024
          },
          "bucket": {
            "arn": "arn:aws:s3:::mybucket",
            "name": "sourcebucket",
            "ownerIdentity": {
              "principalId": "EXAMPLE"
            }
          },
          "s3SchemaVersion": "1.0"
        },
        "responseElements": {
          "x-amz-id-2": "EXAMPLE123/5678abcdefghijklambdaisawesome/mnopqrstuvwxyzABCDEFGH",
          "x-amz-request-id": "EXAMPLE123456789"
        },
        "awsRegion": "us-east-1",
        "eventName": "ObjectCreated:Put",
        "userIdentity": {
          "principalId": "EXAMPLE"
        },
        "eventSource": "aws:s3"
      }
    ]
  }
}
