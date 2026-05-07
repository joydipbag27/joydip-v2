set -e

source .env

echo "Building app..."
npm run build

echo "Uploading to s3..."
aws s3 sync dist/ s3://$S3_BUCKET --delete

echo "Invalidating cloudfront..."
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"

echo "Deployment completed!!!"