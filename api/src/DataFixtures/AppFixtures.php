<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use App\Entity\Company;


class AppFixtures extends Fixture
{
    private static $companyNames = [
        'Cassin, Waters and Graham',
        'Howell Group',
        'Witte GmbH & Co. OHG',
        'Friesen, Dach and Leffler',
        'Miller-Wehner',
        'Harris Ltd',
        'Bednar, Bradtke and Marks',
        'Schinner PLC',
        'Crona-Hyatt',
        'Braun-Veum',
        'Tomaszewski P.P.O.F',
        'Takkala, Rauhala and Valjakka',
        'Mäkelä-Turunen',
        'Elmer Bergqvist AB',
        'Romano-Sanna SPA',
        'Müller Krause GmbH & Co. OHG	',
        'Lemieux Lacroix SARL',
        'Asensio y Escobedo e Hijo',
        'Ackermann Götz AG',
        'Donati-Mancini e figli',
    ];
    private static $companyCountries = [
        'United States',
        'Canada',
        'Germany',
        'Austria',
        'United States',
        'Great Britain',
        'Holland',
        'China',
        'United Arab Emirates',
        'Austria',
        'Poland',
        'Finland',
        'Denmark',
        'Sweden',
        'Italy',
        'Germany',
        'France',
        'Mexico',
        'Switzerland',
        'Italy',
    ];
    private static $companyWebsites = [
      'cwg.example.us',
      'hg.sample.ca',
      'witte.dyolsdcu.de',
      'frissen.example.au',
      'miller-wehner.united.us',
      'harris.free.gb',
      'bbm.example.ne',
      'schinner.plc.ch',
      'crona.hyatt.u.aa',
      'braun-veum.example.com',
      'tomaszewski.sample.pl',
      'takkala.ozvnjbq.fi',
      'turunen.hjzzesz.dn',
      'elmer.dyolsdcu.se',
      'romano.oatslyj.eu',
      'uller.awwjhya.de',
      'mieux.example.fr',
      'ase.zyswnasu.mx',
      'erman.sample.eu',
      'onati.uxeyfuc.it',
    ];

    public function load(ObjectManager $manager)
    {
        for ($i = 0; $i < 20; $i++) {
            $company = new Company();
            $company->setName(self::$companyNames[$i]);
            $company->setCountry(self::$companyCountries[$i]);
            $company->setWebsite(self::$companyWebsites[$i]);
            $manager->persist($company);
        }

        $manager->flush();
    }
}
