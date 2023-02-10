export const español = {
    language: 'español',
    header: {
        setDarkModeOn: 'Activar Modo claro',
        setDarkModeOff: 'Activar Modo oscuro',
        home: 'Home',
        about: 'Acerca de'
    },
    home: {
        input: {
            label: 'Ingrese una nueva tarea',
            placeholder: 'Su tarea...',
            button: 'Añadir tarea'
        },
        card: {
            editTask: 'Editar tarea',
            button: 'Borrar'
        },
        edit: {
            title: 'Editar tarea',
            completed: 'Se completo?',
            editTask: 'Editar tarea'
        },
        states: {
            deleteTask: 'Tarea borrada correctamente!',
            create: 'Tarea creada exitosamente!',
            noTasks: 'No tiene ninguna tarea pendiente :D'
        }
    },
    footer: {
        about: 'Acerca de',
        portfolio: 'Portafolio'
    },
    about: {
        text01: 'Este proyecto fue desarrollado por ',
        text02: ' y puede ser visitado haciendo clic ',
        here: ' aquí.',

        title01: 'Acerca de este proyecto',
        p01Text01: 'Este proyecto implementa un simple administrador de tareas (tambien conocido como ToDo List), el cual permite crear, mostrar, editar y borrar tareas (representadas en la UI mediante un simple texto ingresado por el usuario).',
        p01Text02: 'Como es bien sabido en la comunidad, este tipo de proyectos estan enfocados en el backend, mas especificamente en las cuatro interacciones básicas que pueden realizarse con una base de datos: Create, Read, Update y Delete(CRUD).',
        p01Text03: 'A pesar de esto, tambien se busco crear una interfaz agradable, que permita navegar por las tareas como lo haria un usuario corriente.',

        subTitle01: 'Descripción técnica',
        p02Text01: 'A pesar de que un Task Manager (ToDo list) es una aplicacion comunmente utilizada para demostrar un correcto manejo del CRUD, siempre tuve en mente acompañarla con una UI agradable y amigable con el usuario.',
        p02Text02: 'Esto plantea algunos desafios ya que, debido a la naturaleza del proyecto, no es posible utilizar un estado local ni global dentro de React; cada acción del usuario debe verse reflejada en la base de datos y, a su vez, estos cambios deben tener un feedback en la UI. Como es natural esto genera un alto número de llamadas asíncronas, las cuales deben desarrollarse sin afectar el rendimiento de la aplicación ni la interfaz del usuario.',
        p02Text03: 'Finalizado el proyecto, creo con orgullo que este objetivo se consiguio.',
        p02Text04: 'A continuacion hago un detalle mas especifico de las tecnologias utilizadas:',

        libraries: 'Ademas se utilizaron las siguientes librerias:',
        repositories: 'Puede acceder a los repositorios del proyecto siguiendo los siguientes enlaces:',

        title02: 'Acerca del desarrollador',
        p03Text01: 'Mi nombre es Miguel Fernando Garcia, soy desarrollador full stack y apasionado el mundo IT. Amo aprender tecnologías nuevas y aplicarlas en mis proyectos. Si quieres saber mas sobre mí, mi trabajo y habilidades, o mis redes sociales, eres bienvenido a visitar mi pagina web o seguirme en mis redes 😊 (solo haz click en el link de tu interés 😊).',
        p03Text02: 'Muchas gracias por su visita! 😃'
    }
}

export const english = {
    language: 'english',
    header: {
        setDarkModeOn: 'Set Light Mode',
        setDarkModeOff: 'Set Dark Mode',
        home: 'Home',
        about: 'About'
    },
    home: {
        input: {
            label: 'Add a new task',
            placeholder: 'Your task...',
            button: 'Add task'
        },
        card: {
            editTask: 'Edit task',
            button: 'Delete'
        },
        edit: {
            title: 'Edit task',
            completed: 'Completed?',
            editTask: 'Edit task'
        },
        states: {
            deleteTask: 'Task successfully delete!',
            create: 'Task successfully create!',
            noTasks: 'You dont have any pending task :D'
        }
    },
    footer: {
        about: 'About',
        portfolio: 'Portfolio'
    },
    about: {
        text01: 'This project was developed by ',
        text02: ' and can be visited by clicking on the link ',
        here: ' here.',

        title01: 'About this project',
        p01Text01: 'This project implements a simple and user-friendly task manager (also known as a ToDo List), which allows you to create, display, edit, and delete the tasks you have listed.',
        p01Text02: 'As well known in the community, this kind of project is focused on the backend - more specifically, on the four basic interactions that can be performed with a database: Create, Read, Update, and Delete (CRUD).',
        p01Text03: 'Nonetheless, we sought to create a pleasant interface, which allows you.',

        subTitle01: 'Technical description',
        p02Text01: 'Although a ToDo list is an application commonly used to show correct CRUD management, I always had in mind that a nice and user-friendly interface would accompany it.',
        p02Text02: 'This poses some challenges as it is not possible to use local or global state within React, and so each user action should be reflected in the database and, in turn, should have a feedback in the UI - generating a high number of asynchronous calls which should not affect performance or the UI.',
        p02Text03: 'Once the project was finished, I proudly believe that the goal was achieved.',
        p02Text04: 'Below is a detailed list of the technologies used.',

        libraries: 'In addition, the following libraries were used:',
        repositories: 'You can access the project repositories by following the links below:',

        title02: 'About the developer',
        p03Text01: 'My name is Miguel Fernando Garcia, and I am a full stack developer and passionate about the IT world. I am always excited to learn new things and do my best to apply them in my projects. If you want to know more about me, my work and skills, or my social media, then youre more than welcome to visit my website or my social media! 😊 (Just click the link of your choice 😊)',
        p03Text02: 'Thank you for your visit! 😃'
    }
}