export interface Lecture {
  title: string;
  subtitle: string;
  href: string;
}

export interface Category {
  key: string;
  name: string;
  href: string;
  accentColor: string;
  lectures: Lecture[];
}

export const categories: Category[] = [
  {
    key: 'jvm',
    name: 'JVM',
    href: '/jvm',
    accentColor: 'cyan',
    lectures: [],
  },
  {
    key: 'spring',
    name: 'Spring Ecosystem',
    href: '/spring',
    accentColor: 'cyan',
    lectures: [],
  },
  {
    key: 'jpa',
    name: 'JPA',
    href: '/jpa',
    accentColor: 'cyan',
    lectures: [],
  },
  {
    key: 'database',
    name: 'Database',
    href: '/database',
    accentColor: 'cyan',
    lectures: [
      { title: 'Random I/O vs Sequential I/O', subtitle: '디스크 I/O 패턴과 DB 설계의 관계', href: '/database/random-sequential-io' },
      { title: 'Redo Log & Undo Log', subtitle: '트랜잭션의 내구성과 원자성을 보장하는 두 개의 로그', href: '/database/redo-undo-log' },
      { title: 'Transaction Isolation Level', subtitle: '정합성과 동시성의 줄다리기', href: '/database/isolation-level' },
      { title: 'UPSERT', subtitle: '있으면 UPDATE, 없으면 INSERT를 원자적으로 처리하는 패턴', href: '/database/upsert' },
    ],
  },
  {
    key: 'redis',
    name: 'Redis',
    href: '/redis',
    accentColor: 'green',
    lectures: [
      { title: '캐시 강의', subtitle: '캐시의 개념과 동작 원리', href: '/cache/cache-lecture' },
      { title: '캐시 동기화', subtitle: '캐시와 DB 간의 일관성 유지 전략', href: '/cache/cache-sync' },
      { title: '캐시 스탬피드', subtitle: '대규모 캐시 만료 시 발생하는 문제와 해결', href: '/cache/cache-stampede' },
    ],
  },
  {
    key: 'kafka',
    name: 'Kafka',
    href: '/kafka',
    accentColor: 'purple',
    lectures: [
      { title: '트랜잭션 아웃박스', subtitle: 'DB 트랜잭션과 메시지 발행의 원자성 보장', href: '/kafka/transactional-outbox' },
    ],
  },
  {
    key: 'system',
    name: 'System Design',
    href: '/system',
    accentColor: 'amber',
    lectures: [
      { title: '정합성', subtitle: '분산 시스템에서의 데이터 정합성 보장', href: '/system/consistency' },
      { title: '멱등성', subtitle: '같은 요청을 여러 번 해도 결과가 같다', href: '/system/idempotency' },
    ],
  },
];
