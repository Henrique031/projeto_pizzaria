import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const diasDaSemana = [
    { dia: 'Segunda', horario: '18:00 às 23:59' },
    { dia: 'Terça', horario: '18:00 às 23:59' },
    { dia: 'Quarta', horario: '18:00 às 23:59' },
    { dia: 'Quinta', horario: '18:00 às 23:59' },
    { dia: 'Sexta', horario: '18:00 às 23:59' },
    { dia: 'Sábado', horario: '18:00 às 23:59' },
    { dia: 'Domingo', horario: 'Fechado' },
  ];

  const Pagamentos = () => {
    const opcoes = [
      { nome: 'Dinheiro', icone: 'attach-money' },
      { nome: 'Cartão de Crédito', icone: 'credit-card' },
      { nome: 'Cartão de Débito', icone: 'credit-card' },
      { nome: 'Pix', icone: 'qr-code' },
    ];
  
    return (
      <View style={styles.pagamentoContainer}>
        {opcoes.map((opcao) => (
          <View key={opcao.nome} style={styles.opcaoPagamentoContainer}>
            <MaterialIcons name={opcao.icone} size={24} color="black" />
            <Text style={styles.opcaoPagamento}>{opcao.nome}</Text>
          </View>
        ))}
      </View>
    );
  };

const HorariosDeFuncionamentoScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Horários de Funcionamento</Text>
            <Text style={styles.status}>Fechado Agora</Text>
            <View style={styles.diaContainer}>
                <Text style={styles.dia}>Segunda:</Text>
                <Text style={styles.horario}>18:00 às 23:59</Text>
            </View>
            <View style={styles.diaContainer}>
                <Text style={styles.dia}>Terça:</Text>
                <Text style={styles.horario}>18:00 às 23:59</Text>
            </View>
            <View style={styles.diaContainer}>
                <Text style={styles.dia}>Quarta:</Text>
                <Text style={styles.horario}>18:00 às 23:59</Text>
            </View>
            <View style={styles.diaContainer}>
                <Text style={styles.dia}>Quinta:</Text>
                <Text style={styles.horario}>18:00 às 23:59</Text>
            </View>
            <View style={styles.diaContainer}>
                <Text style={styles.dia}>Sexta:</Text>
                <Text style={styles.horario}>18:00 às 23:59</Text>
            </View>
            <View style={styles.diaContainer}>
                <Text style={styles.dia}>Sábado:</Text>
                <Text style={styles.horario}>18:00 às 23:59</Text>
            </View>
            <View style={styles.diaContainer}>
                <Text style={styles.dia}>Domingo:</Text>
                <Text style={styles.horario}>18:00 às 23:59</Text>
            </View>
            <Text style={styles.titulo}>Telefone</Text>
            <Text style={styles.telefone}>(11) 4787-8778</Text>
            <Text style={styles.titulo}>Endereço</Text>
            <Text style={styles.endereco}>Jardim Salete, 111, Francisco Comino - Taboão da Serra/SP</Text>
            <Text style={styles.titulo}>Opções de entrega</Text>
            <View style={styles.entregaContainer}>
            <MaterialIcons name="motorcycle" size={24} color="black" />
                <Text style={styles.entrega}>Delivery</Text>
            </View>
            <Text style={styles.titulo}>Pagamento</Text>
            <View style={styles.pagamentoContainer}>
                <View style={styles.opcaoPagamentoContainer}>
                    <View style={styles.checkbox} />
                    <Text style={styles.opcaoPagamento}>Dinheiro</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'flex-start', // alinhamento no canto esquerdo
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    status: {
        fontSize: 18,
        marginBottom: 20,
    },
    diaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    dia: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    horario: {
        fontSize: 16,
    },
    telefone: {
        fontSize: 16,
        marginBottom: 20,
    },
    endereco: {
        fontSize: 16,
        marginBottom: 20,
    },
    entregaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    entrega: {
        fontSize: 16,
    },
    pagamentoContainer: {
        marginBottom: 20,
    },
    opcaoPagamentoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 2,
        borderWidth: 2,
        borderColor: '#000',
        marginRight: 10,
    },
    opcaoPagamento: {
        fontSize: 16,
    },
});

export default HorariosDeFuncionamentoScreen;
