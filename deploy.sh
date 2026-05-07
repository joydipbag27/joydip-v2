set -e

source .env

echo "Building app..."
npm run build

echo "Uploading to s3..."
aws s3 sync dist/ s3://$S3_BUCKET --delete

echo "Deployment completed!!!"