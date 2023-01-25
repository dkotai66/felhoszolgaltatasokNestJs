import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Felhoszolgaltatasok {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nev: string;

    @Column('int')
    meret: number;

    @Column('int')
    ar: number;
}