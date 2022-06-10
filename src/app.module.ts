import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { AddressModule } from './modules/address/address.module';
import { GroupModule } from './modules/group/group.module';
import { EventModule } from './modules/event/event.module';
import { PlaceModule } from './modules/place/place.module';
import { RideModule } from './modules/ride/ride.module';

@Module({
  imports: [
    UserModule,
    AddressModule,
    GroupModule,
    EventModule,
    PlaceModule,
    RideModule,
  ],
})
export class AppModule {}
