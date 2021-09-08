using System;

namespace ProjektasBIT2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("______________________________________________________________");
            int a, b, c;
            a=SkaiciusIsEkrano();
            Console.WriteLine(a);
            Console.WriteLine("Hello World!");
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
