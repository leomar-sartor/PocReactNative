import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
//import axios from 'axios';

import api from './axios/api';

//representação de qual o padrão que os seus dados terão que ter
const schema = yup.object({
  username: yup.string().required('Informe seu usário'),
  email: yup.string().email('Email invalido').required('Informe seu e-mail'),
  password: yup
    .string()
    .min(6, 'Senha deve ter pelo menos 6 digitos')
    .required('Informe seu senha'),
});

// https://www.youtube.com/watch?v=5eafG9lAC_k

type FormData = {
  username: string;
  email: string;
  password: string;
};

export default function App() {
  api
    .get('WeatherForecast')
    .then(response => {
      console.log('Retorno', JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log('ERRO: ', JSON.stringify(error));
    });
  //const baseUrl = 'http://localhost:5163/WeatherForecast/GerarRelatorio';

  // const ApiManager = axios.create({
  //   baseURL: 'http://localhost:5163',
  //   responseType: 'json',
  //   withCredentials: false,
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //     // Accept: 'application/json',
  //   },
  // });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    //defaultValues
    resolver: yupResolver(schema), //pra não usar o required do form, pode integrar com outra lib como yup
  });

  async function handleSignIn(data: FormData) {
    console.log('Mandando', data.email);

    // await axios({
    //   method: 'get',
    //   url: 'http://192.168.3.1:5163/WeatherForecast',
    //   data: {
    //     username: 'leomar.sartor',
    //     email: 'leomar.sartor@funcionalcorp.com.br',
    //     password: '123456789',
    //   },
    // })
    //   .then(function (response) {
    //     console.log('Retorno: ', response);
    //   })
    //   .catch(function (error) {
    //     console.log('ERRO: ', JSON.stringify(error));
    //   });

    console.log('Mandou');
    //console.log(data);
    //alert(JSON.stringify(data));

    // try {
    //   await ApiManager('/WeatherForecast/GerarRelatorio', {
    //     method: 'post',
    //     data: {
    //       username: 'leomar.sartor',
    //       email: 'leomar.sartor@funcionalcorp.com.br',
    //       password: '123456789',
    //     },
    //   });
    // } catch (err) {
    //   console.log('ERRO: ', JSON.stringify(err));
    // }

    // await ApiManager.get('http://localhost:5163/WeatherForecast')
    //   .then(function (response) {
    //     console.log('Retorno: ', response);
    //   })
    //   .catch(function (error) {
    //     console.log('ERRO: ', JSON.stringify(error));
    //   });

    // axios
    //   .post(
    //     'http://localhost:5163/WeatherForecast/GerarRelatorio',
    //     {
    //       username: 'leomar.sartor',
    //       email: 'leomar.sartor@funcionalcorp.com.br',
    //       password: '123456789',
    //     },
    // {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // },
    // )
    // .then(function (response) {
    //   console.log('Retorno: ', response);
    // })
    // .catch(function (error) {
    //   console.log(error);

    // if (error.response) {
    //   console.log(error.response.data);
    //   console.log(error.response.status);
    //   console.log(error.response.headers);
    // }
    // });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Teste </Text>

      <Controller
        control={control}
        name="username"
        //rules={{
        //   required: true /  required: "Campo obrigatório "
        //   pattern : { message: "campo incorreto",  valur: regex (/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i) }
        //   minLength: 3
        //   outras ....
        //}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[
              styles.input,
              {
                borderWidth: errors.username && 2,
                borderColor: errors.username && '#ff375b',
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Seu username"
            autoCapitalize="none"
          />
        )}
      />
      {errors.username && (
        <Text style={styles.labelError}> {errors.username?.message}</Text>
      )}

      <Controller
        control={control}
        name="email"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[
              styles.input,
              {
                borderWidth: errors.email && 2,
                borderColor: errors.email && '#ff375b',
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Digite seu email"
          />
        )}
      />
      {errors.email && (
        <Text style={styles.labelError}> {errors.email?.message}</Text>
      )}

      <Controller
        control={control}
        name="password"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[
              styles.input,
              {
                borderWidth: errors.password && 2,
                borderColor: errors.password && '#ff375b',
              },
            ]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />
        )}
      />
      {errors.password && (
        <Text style={styles.labelError}> {errors.password?.message}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        // onPress={() => alert('Apertou para Logar')}
        onPress={handleSubmit(handleSignIn)}>
        <Text style={styles.buttonText}> Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center',
    backgroundColor: '#D3D3D3',
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 34,
    marginBottom: 34,
    color: '#121212',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius: 4,
    color: '#121212',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#45D800',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  labelError: {
    alignSelf: 'flex-end',
    color: '#ff375b',
    marginBottom: 8,
  },
});
