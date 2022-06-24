
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class AddressInput {
    id?: Nullable<string>;
    name?: Nullable<string>;
    street?: Nullable<string>;
    city?: Nullable<string>;
    state?: Nullable<string>;
    zip?: Nullable<string>;
    country?: Nullable<string>;
}

export class CreateAddressInput {
    userId?: Nullable<string>;
    placeId?: Nullable<string>;
    address?: Nullable<AddressInput>;
}

export class PersonaInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    bio?: Nullable<string>;
    user?: Nullable<UserCreateInput>;
}

export class PlaceInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    address?: Nullable<AddressInput>;
}

export class UserCreateInput {
    email: string;
    username: string;
}

export class UserAddAddressInput {
    userId: string;
    addressId: string;
}

export class Address {
    id: string;
    name?: Nullable<string>;
    street?: Nullable<string>;
    city?: Nullable<string>;
    state?: Nullable<string>;
    zip?: Nullable<string>;
    country?: Nullable<string>;
    user?: Nullable<User>;
    place?: Nullable<Place>;
}

export abstract class IQuery {
    abstract addresses(): Nullable<Address>[] | Promise<Nullable<Address>[]>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;
}

export abstract class IMutation {
    abstract createAddress(data?: Nullable<CreateAddressInput>): Address | Promise<Address>;

    abstract createUser(user?: Nullable<UserCreateInput>): User | Promise<User>;

    abstract userAddAddress(data?: Nullable<UserAddAddressInput>): User | Promise<User>;
}

export class Persona {
    id: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    bio?: Nullable<string>;
    user?: Nullable<User>;
}

export class Place {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    address?: Nullable<Address>;
}

export class User {
    id: string;
    email: string;
    username: string;
    addresses?: Nullable<Nullable<Address>[]>;
    personas?: Nullable<Nullable<Persona>[]>;
}

type Nullable<T> = T | null;
