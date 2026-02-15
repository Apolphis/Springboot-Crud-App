**PREREQUISITES**


Java 21+


Springboot


Node.js 24+ and npm


PostGreSQL 15+


Maven



==============================================================================


**DB CONIG**


sudo -u postgres psql


CREATE DATABASE citizen_db;


CREATE USER myuser with PASSWORD 'mypassword';


GRANT ALL PRIVILEGES ON DATABASE citizen_db TO myuser;


\q



===============================================================================


**PROPERTIES CHECK**


cd to folder location/src/main/resources


open application.properties in a editor



CONFRIM BELOW:


spring.datasource.url=jdbc:postgresql://localhost:5432/citizen_db



spring.datasource.username=myuser


spring.datasource.password=mypassword



spring.jpa.hibernate.ddl-auto=update



spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect




=================================================================================


**COMPILE AND RUN MAVEN**


Linux/MAC


chmod +x mvnw


./mvnw clean spring-boot:run



for windows punters


.\mvnw.cmd clean spring-boot:run




================================================================================


**FRONT END INSTALL**


cd to folder location/citizen.ui


npm install axios lucide-react


npm run dev


click localhost link or copy and paste into address bar
