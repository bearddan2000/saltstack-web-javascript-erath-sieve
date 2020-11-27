
    function ToInt(id) {
      var x = $('#' + id).val();
      return parseInt(x);
    }

    // method generate all prime number less then N in O(n)
    function manipulated_seive(isprime, prime, SPF, N) {
      // 0 and 1 are not prime
      isprime[0] = false;
      isprime[1] = false;

      // Fill rest of the entries
      for (var i = 2; i < N; i++) {
        // If isPrime[i] == True then i is
        // prime number
        if (isprime[i]) {
          // put i into prime[] vector
          prime.push(i);

          // A prime number is its own smallest
          // prime factor
          SPF[i] = i;
        }

        // Remove all multiples of  i*prime[j] which are
        // not prime by making isPrime[i*prime[j]] = false
        // and put smallest prime factor of i*Prime[j] as prime[j]
        // [for exp :let  i = 5, j = 0, prime[j] = 2 [ i*prime[j] = 10]
        // so smallest prime factor of '10' is '2' that is prime[j] ]
        // this loop run only one time for number which are not prime
        for (var j = 0; j < prime.length &&
          i * prime[j] < N && prime[j] <= SPF[i]; j++) {
          isprime[i * prime[j]] = false;

          // put smallest prime factor of i*prime[j]
          SPF[i * prime[j]] = prime[j];
        }
      }
    }

    function main(N) {
      var output = "";
      var isprime = [];
      var prime = [];
      var SPF = [];

      // initializing isprime and spf
      for (var i = 0; i < 65; i++) {
        isprime.push(true);
        SPF.push(2);
      }

      manipulated_seive(isprime, prime, SPF, N);

      // pint all prime number less then N
      for (var i = 0; i < prime.length && prime[i] <= N; i++)
        output += prime[i] + " ";

      return output;
    }
