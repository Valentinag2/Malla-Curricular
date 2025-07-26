document.addEventListener('DOMContentLoaded', function() {

    // --- Definición de Datos de la Malla Curricular ---
    const ramosData = [
        // Semestre 1
        { id: 'ID1', nombre: 'Introducción al derecho', semestre: 1, prerequisitos: [] },
        { id: 'ID2', nombre: 'Instituciones políticas', semestre: 1, prerequisitos: [] },
        { id: 'ID3', nombre: 'Historia constitucional del derecho', semestre: 1, prerequisitos: [] },
        { id: 'ID4', nombre: 'Fundamentos filosóficos del derecho', semestre: 1, prerequisitos: [] },
        { id: 'ID5', nombre: 'Estrategias para el aprendizaje', semestre: 1, prerequisitos: [] },

        // Semestre 2
        { id: 'TLP', nombre: 'Teoría de la ley y las personas', semestre: 2, prerequisitos: ['ID1'] },
        { id: 'DF', nombre: 'Derechos fundamentales', semestre: 2, prerequisitos: ['ID2'] },
        { id: 'FE', nombre: 'Fundamentos de la economía', semestre: 2, prerequisitos: [] },
        { id: 'FD', nombre: 'Filosofía del derecho', semestre: 2, prerequisitos: ['ID4'] },
        { id: 'FIJ', nombre: 'Fundamentos de la investigación jurídica', semestre: 2, prerequisitos: [] },
        { id: 'A', nombre: 'Antropología', semestre: 2, prerequisitos: [] },
        
        // Semestre 3
        { id: 'AJ', nombre: 'Acto jurídico', semestre: 3, prerequisitos: ['TLP'] },
        { id: 'DCO', nombre: 'Derecho constitucional orgánico', semestre: 3, prerequisitos: ['DF'] },
        { id: 'DIT', nombre: 'Derecho individual del trabajo', semestre: 3, prerequisitos: ['FE'] },
        { id: 'DPO', nombre: 'Derecho procesal orgánico', semestre: 3, prerequisitos: ['DF'] },
        { id: 'E', nombre: 'Etica', semestre: 3, prerequisitos: ['A'] },

        // Semestre 4
        { id: 'B', nombre: 'Bienes', semestre: 4, prerequisitos: ['AJ'] },
        { id: 'DA', nombre: 'Derecho administrativo', semestre: 4, prerequisitos: ['DCO'] },
        { id: 'DCTSS', nombre: 'Derecho colectivo del trabajo y de la seguridad social', semestre: 4, prerequisitos: ['DIT'] },
        { id: 'RCTP', nombre: 'Reglas comunes a todo procedimiento', semestre: 4, prerequisitos: ['DPO'] },
        { id: 'EFI1', nombre: 'Electivo de formación integral I', semestre: 4, prerequisitos: ['E'] },
        { id: 'AEO', nombre: 'Argumentación y expresión oral', semestre: 4, prerequisitos: [] },
        
        // Semestre 5
        { id: 'OC', nombre: 'Obligaciones y contratos', semestre: 5, prerequisitos: ['B'] },
        { id: 'TDP', nombre: 'Teoría del delito y de la pena', semestre: 5, prerequisitos: ['DF'] },
        { id: 'AC', nombre: 'Actos de comercio', semestre: 5, prerequisitos: ['AJ'] },
        { id: 'PD', nombre: 'Procedimiento declarativos', semestre: 5, prerequisitos: ['RCTP'] },
        { id: 'EFI2', nombre: 'Electivo de formación II', semestre: 5, prerequisitos: [] },
        { id: 'MCRC', nombre: 'Métodos colaborativos de resolución de conflictos', semestre: 5, prerequisitos: ['AEO'] },
        
        // Semestre 6
        { id: 'RC', nombre: 'Responsabilidad civil', semestre: 6, prerequisitos: ['OC'] },
        { id: 'FAD', nombre: 'Formas de aparición del delito', semestre: 6, prerequisitos: ['TDP'] },
        { id: 'DS', nombre: 'Derecho societario', semestre: 6, prerequisitos: ['AC'] },
        { id: 'RJE', nombre: 'Recursos y juicio ejecutivo', semestre: 6, prerequisitos: ['PD'] },
        { id: 'EFI3', nombre: 'Electivo de formación integral III', semestre: 6, prerequisitos: [] },
        { id: 'MNCA', nombre: 'Mediación, negociación, conciliación judicial y arbitraje', semestre: 6, prerequisitos: ['MCRC'] },

        // Semestre 7
        { id: 'DFS', nombre: 'Derecho de familia y sucesorio', semestre: 7, prerequisitos: ['RC'] },
        { id: 'DPE', nombre: 'Derecho penal especial', semestre: 7, prerequisitos: ['FAD'] },
        { id: 'IDC', nombre: 'Insolvencia y derecho concursal', semestre: 7, prerequisitos: ['DS'] },
        { id: 'PE', nombre: 'Procedimientos especiales', semestre: 7, prerequisitos: ['RJE'] },
        { id: 'EFI4', nombre: 'Electivo de formación integral IV', semestre: 7, prerequisitos: [] },
        { id: 'RL', nombre: 'Redacción legal', semestre: 7, prerequisitos: ['MNCA'] },

        // Semestre 8
        { id: 'ERP', nombre: 'Etica y responsabilidad profesional', semestre: 8, prerequisitos: [] },
        { id: 'DPEC', nombre: 'Derecho penal económico y compliance', semestre: 8, prerequisitos: ['DPE'] },
        { id: 'DT', nombre: 'Derecho tributario', semestre: 8, prerequisitos: ['IDC'] },
        { id: 'DPP', nombre: 'Derecho procesal penal', semestre: 8, prerequisitos: ['DPE'] },
        { id: 'DER', nombre: 'Derecho económico regulatorio', semestre: 8, prerequisitos: ['IDC'] },
        { id: 'DLO', nombre: 'Destrezas de litigación oral', semestre: 8, prerequisitos: ['RL'] },

        // Semestre 9
        { id: 'CJ1', nombre: 'Clinica jurídica I', semestre: 9, prerequisitos: [] },
        { id: 'SI', nombre: 'Seminario de investigación', semestre: 9, prerequisitos: ['ERP'] },
        { id: 'EP1', nombre: 'Electivo de profundización I', semestre: 9, prerequisitos: [] },
        { id: 'EP2', nombre: 'Electivo de profundización II', semestre: 9, prerequisitos: [] },
        { id: 'E1', nombre: 'Electivo 1', semestre: 9, prerequisitos: [] },

        // Semestre 10
        { id: 'CJ2', nombre: 'Clinica jurídica II', semestre: 10, prerequisitos: ['CJ1'] },
        { id: 'E2', nombre: 'Electivo II', semestre: 10, prerequisitos: ['E1'] },
        { id: 'EP3', nombre: 'Electivo de profundización III', semestre: 10, prerequisitos: ['EP1', 'EP2'] },
        { id: 'SIJ', nombre: 'Seminario de integración jurídica', semestre: 10, prerequisitos: [] },
    ];

    const mallaContainer = document.getElementById('malla-curricular');
    const modal = document.getElementById('alert-modal');
    const alertMessage = document.getElementById('alert-message');
    const closeButton = document.querySelector('.close-button');
    const resetButton = document.getElementById('reset-button');
    
    // Cargar el estado de los ramos aprobados desde localStorage
    let ramosAprobados = JSON.parse(localStorage.getItem('ramosAprobados')) || [];

    // Función para guardar el estado en localStorage
    function guardarProgreso() {
        localStorage.setItem('ramosAprobados', JSON.stringify(ramoAprobados));
    }

    // Función para renderizar la malla curricular
    function renderizarMalla() {
        mallaContainer.innerHTML = '';
        const maxSemestre = Math.max(...ramosData.map(r => r.semestre));

        for (let i = 1; i <= maxSemestre; i++) {
            const semestreColumna = document.createElement('div');
            semestreColumna.className = 'semestre-columna';
            
            const semestreTitulo = document.createElement('h2');
            semestreTitulo.className = 'semestre-titulo';
            semestreTitulo.textContent = `Semestre ${i}`;
            semestreColumna.appendChild(semestreTitulo);

            const ramosDelSemestre = ramosData.filter(ramo => ramo.semestre === i);
            ramosDelSemestre.forEach(ramo => {
                const ramoDiv = document.createElement('div');
                ramoDiv.className = 'ramo';
                ramoDiv.textContent = ramo.nombre;
                ramoDiv.dataset.id = ramo.id;

                actualizarEstadoRamo(ramoDiv, ramo);
                
                ramoDiv.addEventListener('click', () => onRamoClick(ramo));
                semestreColumna.appendChild(ramoDiv);
            });
            mallaContainer.appendChild(semestreColumna);
        }
    }

    // Función para manejar el clic en un ramo
    function onRamoClick(ramo) {
        const requisitosCumplidos = verificarRequisitos(ramo);

        if (ramosAprobados.includes(ramo.id)) {
            // Si ya está aprobado, lo des-aprueba
            ramosAprobados = ramosAprobados.filter(id => id !== ramo.id);
        } else if (requisitosCumplidos) {
            // Si no está aprobado pero cumple requisitos, lo aprueba
            ramosAprobados.push(ramo.id);
        } else {
            // Si no cumple requisitos, muestra alerta
            const nombresRequisitos = ramo.prerequisitos.map(idReq => 
                ramosData.find(r => r.id === idReq).nombre
            );
            alertMessage.innerHTML = `Para tomar este ramo, primero debes aprobar: <br><strong>${nombresRequisitos.join(', ')}</strong>`;
            modal.style.display = 'flex';
            return; // Detiene la ejecución para no actualizar la malla aún
        }

        guardarProgreso();
        actualizarTodaLaMalla();
    }

    // Función para actualizar el estado visual de un solo ramo
    function actualizarEstadoRamo(ramoDiv, ramo) {
        ramoDiv.classList.remove('aprobado', 'bloqueado');
        const requisitosCumplidos = verificarRequisitos(ramo);

        if (ramosAprobados.includes(ramo.id)) {
            ramoDiv.classList.add('aprobado');
        } else if (!requisitosCumplidos) {
            ramoDiv.classList.add('bloqueado');
        }
    }

    // Función para actualizar toda la malla (después de un cambio)
    function actualizarTodaLaMalla() {
        document.querySelectorAll('.ramo').forEach(ramoDiv => {
            const ramoId = ramoDiv.dataset.id;
            const ramo = ramosData.find(r => r.id === ramoId);
            actualizarEstadoRamo(ramoDiv, ramo);
        });
    }

    // Función para verificar si los prerrequisitos de un ramo están cumplidos
    function verificarRequisitos(ramo) {
        if (ramo.prerequisitos.length === 0) {
            return true;
        }
        return ramo.prerequisitos.every(reqId => ramosAprobados.includes(reqId));
    }

    // Event Listeners para el modal y el botón de reinicio
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    resetButton.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres borrar todo tu progreso? Esta acción no se puede deshacer.')) {
            ramosAprobados = [];
            guardarProgreso();
            actualizarTodaLaMalla();
        }
    });

    // Iniciar la aplicación
    renderizarMalla();
});
