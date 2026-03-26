# Project Rules

디자인 및 UI 관련 규칙은 [design-guide.md](./design-guide.md)를 반드시 참고한다.

## 기술 스택
- Astro 6 + Tailwind v4 (PostCSS) + React
- 다크 모드 기본, 라이트 모드 전환 가능 (class 기반)
- Pretendard 폰트 (로컬, public/fonts/)

## 디자인 도구
- UI/UX 디자인 및 시각화 작업 시 반드시 `/frontend-design` 스킬을 사용한다.

## 강의 페이지 구성 규칙
- 강의 페이지는 BlogLayout을 사용한 블로그 스크롤 형식이다. 슬라이드가 아니다.
- 각 섹션은 `<section class="article-section" id="xxx">`로 구성한다.
- 섹션 ID는 kebab-case로 작성한다.
- 우측에 TableOfContents가 sticky로 고정되어 현재 섹션을 하이라이트한다.
- 본문 텍스트는 `.body-text` 클래스를 사용한다 (16px).
- 표 내부에 뱃지(`.badge`)를 사용하지 않는다. 색상 텍스트(`<strong style="color:var(--green)">`)로 표현한다.
- `.tag` 요소를 사용하지 않는다.
- `<strong>xxx:</strong>` 패턴 대신 `<strong>xxx</strong><br>` 패턴을 사용한다 (콜론 대신 줄바꿈).
- 코드 블록 내 `{`, `}`는 반드시 `&#123;`, `&#125;`로 이스케이프한다 (Astro JSX 파싱 방지).
- 내용을 지나치게 요약하지 않는다. 블로그 스타일이므로 설명을 충분히 서술한다.

## 데이터 관리
- 카테고리와 강의 목록은 `src/data/categories.ts`에서 단일 관리한다.
- 새 강의 추가 시 categories.ts에 항목을 추가하고, `src/pages/{category}/` 에 .astro 파일을 생성한다.
- 카테고리 index 페이지는 `CategoryLayout.astro`를 사용한다.

## ClientRouter (View Transitions) 주의사항
- `<script>` 태그에서 이벤트 리스너 등록 시 중복 방지 가드를 사용한다.
- IntersectionObserver, setInterval, setTimeout은 `astro:before-swap` 이벤트에서 반드시 cleanup한다.
- 페이지 전환 시 재초기화가 필요한 로직은 `astro:page-load` 이벤트를 사용한다.
