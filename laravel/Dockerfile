FROM php:8.2-apache
WORKDIR /laravel

#instalando o
RUN apt update \
    && apt install -y libpq-dev  unzip git \
    && docker-php-ext-install pdo

#instal o composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
 docker-php-ext-install pdo_mysql
