import { Stream } from 'stream';
import { S3 } from 'aws-sdk';

interface Options {
  accessKeyId: string;
  secretAccessKey: string;
  endpoint: string;
  bucketName: string;
  port: number;
}

class S3Client {
  private readonly _client: S3;

  private readonly _bucketName: string;

  private readonly _endpoint: string;

  constructor(options: Options) {
    this._endpoint = `${options.endpoint}:${options.port}`;

    this._client = new S3({
      accessKeyId: options.accessKeyId ,
      secretAccessKey: options.secretAccessKey,
      endpoint: this._endpoint,
      s3ForcePathStyle: true,
      signatureVersion: 'v4'
    });

    this._bucketName = options.bucketName;
  }

  private _getParams(key: string, body?: any) {
    return ({
      Bucket: this._bucketName,
      Key: key,
      ...(body && ({Body: body}))
    });
  }

  private _getEndpoint(key: string): string {
    return `https://${this._endpoint}/${this._bucketName}/${key}`;
  }

  public async upload(readStream: Stream, key: string): Promise<string> {
    const params = this._getParams(key, readStream);

    await this._client.putObject(params).promise();
    return this._getEndpoint(key);
  }

  public async get(key: string): Promise<any> {
    const params = this._getParams(key);

    return await this._client.getObject(params).promise();
  }
}

export {
  S3Client
};
