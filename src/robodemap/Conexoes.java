/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package robodemap;

import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

/**
 *
 * @author Suporte
 */
public class Conexoes {

    CloseableHttpClient httpClient = HttpClients.createDefault();

    boolean criaConexao() {
        HttpGet httpGet = new HttpGet("http://www.portaldatransparencia.gov.br/ceis?cpfCnpj=04154254928&nome=&tipoSancao=");
        return true;
    }

}
