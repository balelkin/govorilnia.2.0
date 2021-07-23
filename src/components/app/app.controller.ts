import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOkResponse} from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {private start: number;
  constructor(private readonly appService: AppService) { this.start = Date.now();
  }
  @ApiOkResponse({ description: 'Return status and uptime' })
    @Get('healthcheck')
    async healthcheck() {
      const now = Date.now();
      return {
        status: 'My API Online',
        uptime: Number((now - this.start) / 1000).toFixed(0),
      };
    }
  }
