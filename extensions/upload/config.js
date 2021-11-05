module.exports = ({env}) => {

  if(env('NODE_ENV', 'production') === 'production'){
    return {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_KEY'),
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET'),
          }
        }
    }
  }else{
    return {

    }
  }
};
