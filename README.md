Title: Manual de usuario para el uso de Controlador de ingresos y gastos
Author: Jhon Fredy Leal
Date: 31/12/2022

# CONTROLADOR DE INGRESOS Y GASTOS

Bienvenido a la documentación del Sistema de Gestión de Ingresos y Gastos o en sus siglas SISGIG, a continuación, se dará a conocer los puntos importantes para el manejo de la herramienta:

## Indice:

1. [Aspectos básicos del sistema](#1-aspectos-básicos-del-sistema)
2. [Opciones y uso del sistema](#2-opciones-y-uso-del-sistema)
    - [Agregar dinero a la cuenta](#21-agregar-dinero-a-la-cuenta)
    - [Histórico de ingresos](#22-histórico-de-ingresos)
    - [Agregar gastos a la cuenta](#23-agregar-gastos-a-la-cuenta)
    - [Histórico de gastos](#24-histórico-de-gastos)
    - [Histórico de movimientos](#25-histórico-de-movimientos)
    - [Balance de la cuenta](#26-balance-de-la-cuenta)
    - [Corregir un movimiento de la cuenta](#27-corregir-un-movimiento-de-la-cuenta)
    - [Eliminar un movimiento de la cuenta](#28-eliminar-un-movimiento-de-la-cuenta)
    - [Salir](#29-salir)
3. [Advertencia de uso](#3-advertencia-de-uso)
4. [Información adicional y de contacto](#4-información-adicional-y-de-contacto)

<a name = "1-aspectos-básicos-del-sistema"></a>
### 1. Aspectos básicos del sistema

El **Sistema de Gestión de Ingresos y Gastos** es un programa dirigido a las personas que desean otorgarle orden a sus finanzas, por medio de esta herramienta, el cliente puede hacer seguimiento a los ingresos y gastos que realiza a diario.

Su principal objetivo es brindar una solución informática para la administración de las finanzas personales, todo esto a través del acceso a opciones simples de manejar y con la precisión necesaria para llevar a cabo el balance en el momento que se desee.

---

<a name = "2-opciones-y-uso-del-sistema"></a>
### 2. Opciones y uso del sistema

Al tratarse de un sistema de finanzas personales, puede registrar tanto ingresos como gastos, estas son las principales opciones del software, pero también cuenta con la posibilidad de cambiar o corregir algún movimiento, al igual que eliminarlo de ser necesario. Por otro lado, la visualización de los movimientos y el balance financiero personal, convierte al SISGIG en una solución completa y adaptada a las necesidades del usuario.

<p>El menú de opciones es el siguiente: </p>

1. Agregar dinero a la cuenta
2. Histórico de ingresos
3. Agregar gastos a la cuenta
4. Histórico de gastos
5. Histórico de movimientos
6. Balance de la cuenta
7. Corregir un movimiento de la cuenta
8. Eliminar un movimiento de la cuenta

Las **opciones del menú** pueden escogerse escribiendo el número del elemento que desea abrir, por ejemplo, para ingresar a ver el *histórico de movimientos* de la cuenta, se debe digitar el número **5** en la caja de texto del menú principal y luego presionar **Enter** o **Aceptar**.

> Después de finalizar el proceso en alguna de las opciones del sistema, inmediatamente se desplegará el menú principal para seguir con otra tarea o directamente finalizar el programa.

<a name = "21-agregar-dinero-a-la-cuenta"></a>
### 2.1. Agregar dinero a la cuenta

Ingresa de la siguiente forma desde el menú principal:

| Opción del menú | Digitar |
|-----------------|---------|
| Agregar dinero a la cuenta | **1** |

Con esta opción, el usuario podrá ingresar el valor de la entrada de dinero o ingreso [^1] a la cartera y especificar el concepto de dicho monto. El sistema registrará la *fecha y hora* según el momento en que se haga el procedimiento, todo ello para ofrecer una mayor facilidad a la hora de ingresar los datos. El usuario solo tendrá que registrar el *valor del ingreso y el concepto* o proveniencia del mismo.

> **NOTA:** El monto que se ingresa debe ser numérico y no contener puntos *(.)* o comas *(,)*, en caso de ingresar algo diferente en la caja de texto, el sistema pedirá de nuevo la información.

<a name = "22-histórico-de-ingresos"></a>
### 2.2. Histórico de ingresos

Ingresa de la siguiente forma desde el menú principal:

| Opción del menú | Digitar |
|-----------------|---------|
| Histórico de ingresos | **2** |

Con el fin de ofrecer la visualización clara de los ingresos obtenidos por el usuario y registrados, el sistema mostrará una tabla con la información diferenciada en este aspecto. A continuación, verá un ejemplo de un cuadro de ingresos:

| (index) | id | fecha | valor | concepto |
|---------|----|-------|-------|----------|
| 0 | 1672411771769 | '30/12/2022' | '200' | 'Venta de artículo' |
| 1 | 1672412077989 | '30/12/2022' | '100' | 'Me los encontré en la calle' |
| 2 | 1672412149678 | '30/12/2022' | '1000' | 'Lo que sobró del pasaje de hoy' |

<a name = "23-agregar-gastos-a-la-cuenta"></a>
### 2.3. Agregar gastos a la cuenta

Ingresa de la siguiente forma desde el menú principal:

| Opción del menú | Digitar |
|-----------------|---------|
| Agregar gastos a la cuenta | **3** |

La forma de ingresar un gasto[^2] es muy similar al que se realiza para registrar un [ingreso](#21-agregar-dinero-a-la-cuenta), el usuario solo debe tener en cuenta que los valores proporcionados no deben superar los del total de ingresos, ya que en dicho caso el sistema no permitirá el registro del movimiento como *gasto* y lo etiquetará como *rechazado*.

> **NOTA:** Para contar con una idea del total de ingresos y gastos, al igual que del saldo en cuenta, visite el apartado de [balance de la cuenta](#26-balance-de-la-cuenta).

<a name = "24-histórico-de-gastos"></a>
### 2.4. Histórico de gastos

Ingresa de la siguiente forma desde el menú principal:

| Opción del menú | Digitar |
|-----------------|---------|
| Histórico de gastos | **4** |

Al igual que en el [histórico de ingresos](#22-histórico-de-ingresos), los gastos también cuentan con esta opción, pero que a diferencia del anterior, se mostrará todo movimiento etiquetado como *gasto*. A continuación, se mostrará un ejemplo del resultado al ingresar a esta opción:

| (index) | id | fecha | valor | concepto |
|---------|----|-------|-------|----------|
| 0 | 1672411782647 | '30/12/2022' | '100' | 'Compra de dulce' |
| 1 | 1672412085759 | '30/12/2022' | '100' | 'Otro dulce...' |

<a name = "25-histórico-de-movimientos"></a>
### 2.5. Histórico de movimientos

Ingresa de la siguiente forma desde el menú principal:

| Opción del menú | Digitar |
|-----------------|---------|
| Histórico de movimientos | **5** |

Si el usuario desea verificar la totalidad de los movimientos de la cuenta, este histórico será de utilidad, ya que lista la totalidad de actividades financieras solicitadas por el cliente, es decir, los *ingresos*, *gastos* y *rechazados*.

> **NOTA:** En esta opción no se muestra el balance de la cuenta, solo el listado de movimientos.

Este es un ejemplo de cómo se mostraría una tabla en esta opción:

| (index) | id | fecha | valor | concepto | tipo |
|---------|----|-------|-------|----------|------|
| 0 | 1672411771769 | '30/12/2022' | '200' | 'Venta de artículo' | 'Ingreso' |
| 1 | 1672411782647 | '30/12/2022' | '100' | 'Compra de dulce' | 'Gasto' |
| 2 | 1672412077989 | '30/12/2022' | '100' | 'Me los encontré en la calle' | 'Ingreso' |
| 3 | 1672412085759 | '30/12/2022' | '100' | 'Otro dulce...' | 'Gasto' |
| 4 | 1672412149678 | '30/12/2022' | '1000' | 'Lo que sobró del pasaje de hoy' | 'Ingreso' |
| 5 | 1672611535170 | '1/1/2023' | 0 | 'Pago por pedido' | 'Rechazado' |

<a name = "26-balance-de-la-cuenta"></a>
### 2.6. Balance de la cuenta

Ingresa de la siguiente forma desde el menú principal:

| Opción del menú | Digitar |
|-----------------|---------|
| Balance de la cuenta | **6** |

Provee información resumida de la cuenta en tres aspectos: *ingresos*, *gastos* y *balance*. El *balance* corresponde al resultado de sustraer los *gastos* a los *ingresos* registrados en el sistema, por ejemplo:

***
Los ingresos suman: $ 1.300<br>
Los gastos totales suman: $ 200<br>
El balance corresponde a: $ 1.100<br>
***

<a name = "27-corregir-un-movimiento-de-la-cuenta"></a>
### 2.7. Corregir un movimiento de la cuenta

Ingresa de la siguiente forma desde el menú principal:

| Opción del menú | Digitar |
|-----------------|---------|
| Corregir un movimiento de la cuenta | **7** |

Esta opción permite que el usuario modifique alguno de los movimientos de *ingreso*, *gastos* o *rechazados*. Los cambios que se pueden realizar son en:
1. Fecha
2. Valor
3. Concepto

Lo primero es escribir la **id** del registro que se desea modificar, para ello, se muestra el listado de todos los movimientos de la cuenta, luego de esto, solo hace falta escribir el número correspondiente a la opción que desea modificar, después el usuario debe digitar lo correspondiente a lo que se desea cambiar. Para guardar los cambios, el usuario debe digitar **0** (cero).

> **NOTA:** Se recomienda que antes de realizar esta tarea, se verifique el *histórico de movimientos* para copiar el *id* del registro que luego se desea modificar.

<a name = "28-eliminar-un-movimiento-de-la-cuenta"></a>
### 2.8. Eliminar un movimiento de la cuenta

Ingresa de la siguiente forma desde el menú principal:

| Opción del menú | Digitar |
|-----------------|---------|
| Eliminar un movimiento de la cuenta | **8** |

Para esta opción también se debe tener clara la **id** del registro que se desea eliminar, el programa lo validará para mostrar los datos del movimiento consultado, luego pedirá una confirmación a través de un mensaje de alerta.

> **NOTA 1:** Se recomienda que antes de realizar esta tarea, se verifique el *histórico de movimientos* para copiar el *id* del registro que luego se desea eliminar.
> **NOTA 2:** Luego de eliminar el registro, no se podrá recuperar la información.

<a name = "#29-salir"></a>
### 2.9. Salir

Ingresa de la siguiente forma desde el menú principal:

| Opción del menú | Digitar |
|-----------------|---------|
| Salir | **0** |

Elige esta opción para **salir y cerrar el programa**, si desea volver a iniciarlo, puede refrescar la página.
---

<a name = "3-advertencia-de-uso"></a>
### 3. Advertencia de uso

+ El Sistema de Gestión de Ingresos y Gastos SISGIG es un programa de registro de ingresos y egresos, por lo que su efectividad depende de lo juicioso que sea su manejo, por lo que se pide al usuario que sea objetivo y sincero a la hora de ingresar, modificar o borrar información.
+ El Sistema de Gestión de Ingresos y Gastos SISGIG es un programa que aún se encuentra en desarrollo, por lo que, de presentarse alguna falla, notifique para que puedan ser incluidas en la próxima actualización.

<a name = "4-información-adicional-y-de-contacto"></a>
### 4. Información adicional y de contacto

**Programador:** Jhon Fredy Leal
**Contacto:** jhonfleal@gmail.com
**Github:** https://github.com/ARGOBYTE

[^1]: Un ingreso es toda aquella ganancia que se recibe por la venta de un bien o servicio, que generalmente se hace efectiva mediante un cobro monetario.
[^2]: El gasto es un movimiento financiero que quita capital. Se debe tener muy claro que, al hacer un gasto, no se va a recuperarlo. Es un gasto, algo que se disfruta- No hay el retorno de ese gasto. El sistema no diferencia entre un gasto o una inversión, así que puede usarse de esa forma también.