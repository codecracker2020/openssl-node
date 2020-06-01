# openssl-node
Generate SSL with Openssl and run node on https

Run Command from Powershell Administrator Mode
openssl req -nodes -new -x509 -keyout server.key -out server.cert

The above command will prompt for few questions:

1. Enter Country Name - can leave blank
2. Enter state or province - can leave blank
3. Enter city - can leave blank
4. Organization Name - can leave blank
5. Common Name - localhost (*mandatory)
6. Email Address - can leave blank 

After successful execution, you have 2 files in the folder where you ran the above command
    1. server.cert is the self-signed certificate file
    2. server.key is the private key of the certificate

https://localhost:3000/greeting

If openssl is not installed, the user can install from chocolatey by executing the command:

chocolatey install openssl

