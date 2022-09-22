import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('stores')
export class Store {
  @PrimaryColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column()
  key: string;

  @Column()
  token: string;

  @Column()
  accountName: string;

  @Column()
  environment: string;

  @Column()
  bx_token: string;

  @Column()
  bx_user_code: string;

  @Column()
  bx_client_account: string;

  @Column()
  user_id: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @Column()
  district_id: string;

  @Column()
  bx_user_name: string;

  @Column()
  serviceExpress: string;

  @Column()
  servicePriority: string;

  @Column()
  servicePremium: string;

  @Column()
  serviceSameday: string;

  @Column()
  productCategory: string;

  @Column()
  productType: string;

  @Column()
  street: string;

  @Column()
  number: string;
  
  @Column()
  responsableFullName: string;

  @Column()
  responsableRut: string;

  @Column()
  responsableDv: string;

  @Column()
  responsablePrefixPhone: string;

  @Column()
  responsablePhone: string;

  @Column()
  responsableEmail: string;

  @Column()
  dockVtex: string;
  
  @Column()
  statusVtex: string;

  @Column()
  postalCode: string;
}
