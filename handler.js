import { S3Client, PutBucketPolicyCommand } from "@aws-sdk/client-s3";

const client = new S3Client({region: 'ap-south-1'})

module.exports.remediate = async(event) => {
    try {
        console.log('Event: ', JSON.stringify(event, null, 2))

        const bucketName = event.detail.resourceId;
        if(!bucketName) return { statusCode: 500, message: `Could not find bucket name in the event` }

        console.log(`Found non-compliant bucket: ${bucketName}`);

        return { statusCode: 200, message: `Remediation attempt complete.` }
    } catch (error) {
        console.log('Error Occurred: ', error.message)
        return { statusCode: 500, message: `Failed to update the bucket ${error.message}` }
    }
}
