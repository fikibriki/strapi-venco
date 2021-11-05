module.exports = ({env}) => {

  if(env('NODE_ENV', 'production') === 'production'){
    return {
      upload: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID', 'VENCO'),
          secretAccessKey: env('AWS_ACCESS_KEY', 'VENCO'),
          region: env('AWS_REGION', 'eu-west-1'),
          params: {
            Bucket: env('AWS_BUCKET', 'VENCO'),
          }
        }
      }
    }
  }else{
    return {

    }
  }
};
