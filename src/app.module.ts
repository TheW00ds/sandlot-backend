import { Module } from '@nestjs/common';
import { AddressModule } from './modules/address/address.module';
import { EventModule } from './modules/event/event.module';
import { EventAvailableDateModule } from './modules/event-available-date/event-available-date.module';
import { EventCommitmentModule } from './modules/event-commitment/event-commitment.module';
import { GroupModule } from './modules/group/group.module';
import { GroupMembershipModule } from './modules/group-membership/group-membership.module';
import { PersonaModule } from './modules/persona/persona.module';
import { PlaceModule } from './modules/place/place.module';
import { RideModule } from './modules/ride/ride.module';
import { RideRequestModule } from './modules/ride-request/ride-request.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    AddressModule,
    EventModule,
    EventAvailableDateModule,
    EventCommitmentModule,
    GroupModule,
    GroupMembershipModule,
    PersonaModule,
    PlaceModule,
    RideModule,
    RideRequestModule,
    UserModule,
  ],
})
export class AppModule {}
