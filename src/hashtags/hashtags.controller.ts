import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    // TODO : add actual logic
    return 'top hashtags';
  }
  @Get(':tag/posts')
  getPostsForHashtags(@Param() { tag }): string {
    // TODO : add actual logic

    return `hashtags about the ${tag} tag`;
  }
}
