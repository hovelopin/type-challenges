// 유니온 타입에서 하나의 타입을 빼는 방법 
type Alphabet = 'a'  | 'b' | 'c' | 'd';

type UnionSubtractType<T, U extends T> = T extends U ? never : T;

type SubtractA = UnionSubtractType<Alphabet, 'a'>;