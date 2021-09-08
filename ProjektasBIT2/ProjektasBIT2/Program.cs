using System;

namespace ProjektasBIT2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Deimantei reik padeti, nes ji nieko nesupranta");
            int a, b, c;
            a=SkaiciusIsEkrano();
            Console.WriteLine(a);
            Console.WriteLine("Hello World!");
            var Jonas = 5;
            int skaiciukas = 50;

            while (true)
            {
             Console.WriteLine("Mano pavarde yra Andrius");
                break;
            }
        }
        static int SkaiciusIsEkrano()
        {
            int a;
            while (true)
            {
                Console.Write("Iveskite skaiciu: ");
                if (int.TryParse(Console.ReadLine(), out a)) break;
            }
            return a;
        }
    }
}
