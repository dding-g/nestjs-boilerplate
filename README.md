# nest.js boilerplate

## 정리

-   spring과 비슷한 MVC패턴
    -   DAO, DTO, Entity 개념
-   service는 `@Injectable` 데코레이터로 감싸져 있음.
-   `@Param` 데코레이터로 여러 params를 가저오는 경우
    -   예: `/test?id=asdf&name=zzzz` 일 때, 둘다가져오려면 `@Param() param:string[]` 으로 가져오기 가능

### Module이 뭔데?

-   `@Module ()` 데코레이터(decorators)를 사용하는 클래스. (Spring의 어노테이션을 nest에서는 데코레이터 라고 함)
    -   해당 데코레이터는 Nest가 application 구조를 구성할 떄 메타 데이터를 제공
-   `nest g module <모듈 이름>` 으로 생성

### Provider가 뭔데?

-   기본 nest 클래스는 service, repository, factory, helper 등 provider로 취급될 수 있음
-   provider의 주요 아이디어는 종속성으로 주입(injection)할 수 있다는 것 임.
-   즉 객체는 서로 다양한 관계를 만들 수 있고, 객체의 인스턴스를 연결하는 기능은 대부분 Nest 런타임 시스템에 위임될 수 있다.

## DTO, DAO

-   spring 개념과 같음

## Pipe가 뭔데?

-   middleware 개념. data transformation, validation을 함
-   handler, parameter, global level에서 pipe 사용 가능 - 각각 controlller, parameter, main.ts에서 사용됨
    [참고](https://sumini.dev/guide/019-nestjs-directory-structure/)
