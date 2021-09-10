import { Resolver, Mutation, Arg } from 'type-graphql';
import { GraphQLUpload } from 'graphql-upload';
import { Stream } from 'stream';
import { ImageModel } from '../../models/ImageModel';
import { s3Client } from '../../db';
import { Genom } from '../../lib/Genom';

interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream
}

@Resolver()
class ImageResolver {
  @Mutation(() => Boolean)
  async uploadImage(
    @Arg('file', () => GraphQLUpload) file: Upload
  ): Promise<boolean> {
    const genom = Genom.createKey();

    try {
      const url = await s3Client.upload(file.createReadStream(), genom);
      await ImageModel.create({
        genom,
        url,
        origin_file_name: file.filename
      });

      return true;
    } catch (e) {
      return false;
    }
  }
}

export {
  ImageResolver
};
