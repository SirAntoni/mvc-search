const mongoose = require("mongoose");

const { Schema } = mongoose;

const dominiosSchema = new Schema({
    nombre: { type: String },
    dominio:{type:String},
    nombre_comercial: { type: String },

    correo_ordenes: { type: String },
    correo_ordenes_titulo: { type: String },
    tipo: { type: String },

    tipo_pago: { type: String },
    monto: { type: Number, default: 0 },
    comision: { type: Number, default: 0 },
    tipo_moneda_facturacion: { type: String, default: 'SOLES' },
    tipo_moneda_tienda: { type: String, default: 'SOLES' },
    tipo_entorno: { type: String },
    periodo: { type: String },
    periodo_inicio: { type: String },
    periodo_fin: { type: String },
    es_erp: { type: Number },
    envio_ordenes_correo: { type: Number },
    es_facturacion: { type: Number },
    total_ventas: { type: Number },
    integraciones_externas: {
        es_erp: { type: Boolean },
        envio_ordenes_correo: { type: Boolean },
        es_facturacion: { type: Boolean },

        //clientes crosland
        enviar_servicio_sap_zws_pcfvd: { type: Boolean },
        enviar_servicio_sap_zws_pcf: { type: Boolean },

        //clientes puigmx
        enviar_servicio_sap_sales_order_svc: { type: Boolean }
    },

    plan: { type: String },
    estado: { type: String },
    situacion: { type: String },

    contacto_perfil: {
        nombres: { type: String },
        apellidos: { type: String },

        correo_electronico: { type: String },
        telefono: { type: String },

        pais: { type: String },
        pais_codigo: { type: String }
    },

    facturacion: {
        documento_tipo: { type: String },
        datos: { type: Object },

        contacto: {
            nombres: { type: String },
            apellidos: { type: String },

            correo_electronico: { type: String },
            telefono: { type: String }
        }
    },

    pais: { type: String },
    pais_codigo: { type: String },

    idioma: { type: String },
    idioma_codigo: { type: String },

    moneda: { type: String },
    moneda_codigo: { type: String },

    unidad_peso: { type: String },
    unidad_peso_codigo: { type: String },

    unidad_medida: { type: String },
    unidad_medida_codigo: { type: String },

    billetera_movil: {
        monto_cobrar: { type: Number },
        monto_alerta: { type: Number },

        saldo: { type: Number },

        monto_porcentaje_venta: { type: Number },

        frecuencia: { type: String },
        frecuencia_numero: { type: Number },
        morada_filtro: { type: String },
        fecha_cobro_inicial: { type: String },
        proximo_cobro: { type: String }
        //usuario_asignado: { type: Schema.Types.ObjectId },

        //estado: { type: String }
    },

    usuario_creacion: { type: Schema.Types.ObjectId },
    usuario_modificacion: { type: Schema.Types.ObjectId },

    fecha_creacion: { type: String },
    fecha_modificacion: { type: String }
});

module.exports.dominiosModel = mongoose.model("dominios", dominiosSchema, "dominios");
